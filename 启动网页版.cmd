@echo off
cd /d "%~dp0"
echo Yellow Creature Test
powershell -NoProfile -Command "try { $r=Invoke-WebRequest 'http://localhost:4173' -UseBasicParsing -TimeoutSec 2; if($r.StatusCode -eq 200 -and $r.Content.Contains('reveal-audio')) { exit 0 } } catch {}; exit 1"
if %errorlevel%==0 (
  start "" "http://localhost:4173"
  exit /b
)
echo Open http://localhost:4173 after the Preview message appears.
echo Keep this window open while using the website.
node server.mjs
pause

