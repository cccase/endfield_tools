from bs4 import BeautifulSoup
import glob

for file in glob.glob('data/Character/*.html'):
    name = file.split('_')[1].split('の')[0]
    print(f"\n======== {name} ========")
    with open(file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

        # Look for "潜在1", "潜在2", etc.
        for t in soup.find_all(string=lambda text: text and '潜在' in text and len(text) < 20):
            print(t.strip())
            parent_table = t.find_parent('table')
            if parent_table:
                for row in parent_table.find_all('tr'):
                    cells = [c.text.strip().replace('\n', ' ') for c in row.find_all(['th', 'td'])]
                    if cells and len(cells) > 1 and '潜在' in cells[0]:
                        print("  -> " + " | ".join(cells))
