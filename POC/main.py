from flask import Flask, Response, request
import base64
import random
from os import path, makedirs 
from string import ascii_letters
import subprocess
from PIL import Image
from io import BytesIO
import time

app = Flask(__name__)

#DATA_ROOT=/home/andrej/Desktop/skecth2map/AI/datasets/test/ name=los_angeles results_dir=/home/andrej/Desktop/skecth2map/AI/datasets/test/ which_direction=AtoB th backend.lua

INPUT_PATH = "/home/andrej/Desktop/maps-backend/input" # CHANGE THIS
OUTPUT_PATH = "/home/andrej/Desktop/maps-backend/output" # CHANGE THIS
COMMAND = "DATA_ROOT={} name=venice_256 results_dir={} which_direction=AtoB th /home/andrej/Desktop/skecth2map/AI/backend.lua"  # CHANGE THIS


@app.route("/", methods=['GET'])
def main():
    return app.send_static_file('index.html')


@app.route("/sketch-me", methods=["POST"])
def sketch():
    image_string = request.get_json(force=True).get('img', None)
    if image_string is None:
        return Response("property img missing in json", status=500)
    random.seed(int(round(time.time() * 1000)))
    bg = Image.open('background.png')
    image = Image.open(BytesIO(base64.b64decode(image_string)))
    image = image.resize((256, 256))
    bg.paste(image, (0, 0))

    file_name = "".join([random.choice(ascii_letters) for _ in range(0, 40)]) + "_" + str(int(round(time.time() * 1000))) + ".png"
    folder_name = "".join([random.choice(ascii_letters) for _ in range(0, 6)])
    
    input_path = path.join(INPUT_PATH, folder_name)
    output_path = path.join(OUTPUT_PATH)

    makedirs(path.join(input_path, 'val'))

    bg.save(path.join(input_path, 'val', file_name), 'png')

    # this will block
    process = subprocess.Popen(COMMAND.format(input_path, output_path), shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, error = process.communicate()
    file_name = ""
    folder_name = ""
    print(file_name)
    if error is not None and error != '':
	print(str(error))
        return Response(str(error), status=500)
    else:
        return Response(path.join(output_path, file_name))

if __name__ == "__main__":
    app.run(host='0.0.0.0', processes=5)
