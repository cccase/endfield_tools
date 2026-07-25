from bs4 import BeautifulSoup
import glob

for file in glob.glob('data/Character/*.html'):
    name = file.split('_')[1].split('の')[0]
    print(f"\n======== {name} ========")
    with open(file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

        # We need potential table
        for h2 in soup.find_all('h2'):
            if '潜在能力' in h2.text:
                t = h2.find_next('table')
                if t:
                    for row in t.find_all('tr'):
                        cols = row.find_all(['th', 'td'])
                        if len(cols) >= 2:
                            print(f"{cols[0].text.strip()} : {cols[1].text.strip()}")
