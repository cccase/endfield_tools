from bs4 import BeautifulSoup
import glob

for file in glob.glob('data/Character/*.html'):
    name = file.split('_')[1].split('の')[0]
    print(f"\n======== {name} ========")
    with open(file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

        # Look for "潜在1", "潜在2", etc.
        for t in soup.find_all(string=lambda text: text and '潜在1' in text):
            parent_table = t.find_parent('table')
            if parent_table:
                for row in parent_table.find_all('tr'):
                    cells = [c.text.strip() for c in row.find_all(['th', 'td'])]
                    if cells:
                        print(" | ".join(cells))
            else:
                print(t.parent.text.strip())
