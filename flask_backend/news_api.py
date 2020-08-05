import argparse
import json
import requests

def getNews(query, pageNum, pageSize, apiKey):
    url = "https://newsapi.org/v2/everything?q=" + query + "&language=en&excludeDomains=adafruit.com&sortBy=publishedAt&pageSize=" + pageSize + \
            "&page=" + pageNum + "&apiKey=" + apiKey

    r = requests.get(url).text
    response = json.loads(r)
    return response

def main():
    parser = argparse.ArgumentParser(prog='InstaTracker.py')

    parser.add_argument('-q', '--query', action='store', dest='query',
                        help='Set query', type=str)
    parser.add_argument('-p', '--page', action='store', dest='pageNum',
                        help='Set page number', type=str)
    parser.add_argument('-s', '--size', action='store', dest='pageSize',
                        help='Set page size', type=str)
    parser.add_argument('-k', '--key', action='store', dest='apiKey',
                        help='Set page number', type=str)
    args = parser.parse_args()

    if args.query is None and args.pageNum is None and args.pageSize is None and args.apiKey is None:
        parser.print_help()
    else:
        return getNews(args.query, args.pageNum, args.pageSize, args.apiKey)

if __name__ == '__main__':
    main()