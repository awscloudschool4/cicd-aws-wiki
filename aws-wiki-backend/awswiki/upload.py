# from storages.backends.gcloud import GoogleCloudStorage
from datetime import datetime

# storage = GoogleCloudStorage()

def upload_image(file, directory):
    print(file, directory)
    # try:
    #     target_path = f"/{directory}/{datetime.timestamp(datetime.now())}.jpg"
    #     path = storage.save(target_path, file)
    #     return storage.url(path)
    # except Exception as e:
    #     print(e)
    try:
        target_path = f"/{directory}/{datetime.timestamp(datetime.now())}.jpg"
        with open(target_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)
        return target_path
    except Exception as e:
        print(e)
        return None