# hn-server

Hi, this is the HackerNews Server, please consider the following for implementation:

1. Important: Place both server and client repositories within the same folder.

2. Important: Move de docker-compose.yml file (contained in the proyect) a level up in the directory tree.

3. Run docker-compose build.

4. Run docker-compose up.

Expected behavior:

When the server starts, it will automatically populate the database with data from the api.

This process is repeated once every hour

The articles insersion on db will emit a real time event to the client including the aricles inserted data.

The client listen the event, process and render the data automatically


I enjoy making this project, please let me know your opinion to grow as a professional...

Thanks



