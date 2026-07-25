from bs4 import BeautifulSoup
import glob

for file in glob.glob('data/Character/*.html'):
    name = file.split('_')[1].split('の')[0]
    print(f"\n======== {name} ========")
    with open(file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

        # In Endfield Wiki, potential is usually in a div with specific class or a table right after an h3 or h4
        # Let's just find any table row containing "潜在" or "凸"
        for table in soup.find_all('table'):
            if '潜在' in table.text or '凸' in table.text:
                for row in table.find_all('tr'):
                    cols = row.find_all(['th', 'td'])
                    if len(cols) >= 2 and '凸' in cols[0].text:
                        print(f"{cols[0].text.strip()} : {cols[1].text.strip()}")
