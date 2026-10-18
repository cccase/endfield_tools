import subprocess

res = subprocess.run([
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
    '--headless=new',
    '--dump-dom',
    'file:///c:/Users/kosei/Documents/GitHub/endfield_tools/index.html'
], capture_output=True, text=True, encoding='utf-8', errors='ignore')

print("STDOUT length:", len(res.stdout))
print("STDERR:", res.stderr)
with open('dump.html', 'w', encoding='utf-8') as f:
    f.write(res.stdout)
print("Saved to dump.html")

