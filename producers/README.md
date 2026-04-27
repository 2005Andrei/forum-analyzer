simple producers for data, atm I'll only do 4chan (can't do reddit due to the changes in their API usage, and scraping it is not something to do rn), then add more if the pipeline looks good enough

the idea atm is to run the kafka producer instance on a raspberry pi

4chan api:
    1. get a list of boards: https://a.4cdn.org/boards.json
    2. currently active threads+attributes: https://a.4cdn.org/[board]/catalog.json - the original post of each thread
    3. thread endpoint: https://a.4cdn.org/[board]/thread/[thread_id].json, https://a.4cdn.org/[board]/threads.json
