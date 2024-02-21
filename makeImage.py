#install PIL with: 'pip install Pillow'

from PIL import Image

colors = [
    (0, 0, 0),       # Schwarz
    (127, 127, 127), # Grau
    (255, 255, 255), # Weiß
    (255, 255, 0),   # Gelb
    (0, 255, 0),     # Grün
    (0, 255, 255),   # Türkis
    (0, 0, 255),     # Blau
    (255, 0, 0),     # Rot
    (255, 0, 255),   # Lila
    
]

img = Image.new('RGB', (3,3))
img.putdata(colors)

# pixels = img.load()

# for i, color in enumerate(colors):
#   # Berechnen der x und y Position des Pixels basierend auf dem Index
#     x = i % 3  # Spaltenindex
#     y = i // 3  # Zeilenindex
#     pixels[x, y] = color


#img.save('3x3.jpeg', 'JPEG', quality=100, subsampling=0)

img.save('3x3.bmp')

#img.show()

