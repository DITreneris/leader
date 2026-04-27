# Build PDF for CEO/COO Max Value Kit (same toolchain pattern as DITreneris/lead).
# Source:  docs/executive-operating-kit-pdf.md
# Output:  public/assets/downloads/executive-operating-kit.pdf
# Requires: Pandoc on PATH; PDF engine: Typst (winget install Typst.Typst) OR pdflatex/xelatex/lualatex.

$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $scriptDir
Set-Location $root

$outDir = Join-Path $root "public\assets\downloads"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$pandoc = Get-Command pandoc -ErrorAction SilentlyContinue
if (-not $pandoc) {
  $pandocCandidates = @(
    (Join-Path $env:LOCALAPPDATA "Pandoc\pandoc.exe"),
    (Join-Path $env:LOCALAPPDATA "Programs\Pandoc\pandoc.exe"),
    (Join-Path $env:ProgramFiles "Pandoc\pandoc.exe"),
    (Join-Path ${env:ProgramFiles(x86)} "Pandoc\pandoc.exe")
  ) | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1

  if ($pandocCandidates) {
    $pandoc = $pandocCandidates
  } else {
    throw "pandoc not found. Install: winget install JohnMacFarlane.Pandoc"
  }
}

$typst = Get-Command typst -ErrorAction SilentlyContinue
if (-not $typst) {
  $typstCandidates = @(
    (Join-Path $env:LOCALAPPDATA "Programs\Typst\typst.exe"),
    (Join-Path $env:LOCALAPPDATA "Programs\Typst\typst-x86_64-pc-windows-msvc\typst.exe"),
    (Join-Path $env:ProgramFiles "Typst\typst.exe"),
    (Join-Path ${env:ProgramFiles(x86)} "Typst\typst.exe")
  ) | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1

  if ($typstCandidates) {
    $typst = $typstCandidates
  }
}

$src = Join-Path $root "docs\executive-operating-kit-pdf.md"
$out = Join-Path $outDir "executive-operating-kit.pdf"
if (-not (Test-Path $src)) { throw "Missing source: $src" }

# Typography: docs/executive-operating-kit-pdf.md YAML front matter
$pandocArgs = @(
  $src,
  "-o", $out,
  "--resource-path", ".;docs"
)

if ($typst) {
  $typstEngine = if ($typst -is [string]) { $typst } else { $typst.Source }
  & $pandoc @pandocArgs --pdf-engine=$typstEngine
} else {
  $latexEngine = $null
  foreach ($name in @("pdflatex", "xelatex", "lualatex")) {
    $c = Get-Command $name -ErrorAction SilentlyContinue
    if ($c) {
      $latexEngine = $c.Name
      break
    }
  }
  if (-not $latexEngine) {
    throw @"
No PDF engine found. Install one of:
  - Typst: winget install Typst.Typst
  - LaTeX with pdflatex on PATH (e.g. MiKTeX, TeX Live)
See docs/SETUP_PDF.md
"@
  }
  & $pandoc @pandocArgs --pdf-engine=$latexEngine -V lang=en
}
Write-Host "OK: $out"
