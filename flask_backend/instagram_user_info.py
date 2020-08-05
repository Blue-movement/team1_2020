import argparse
import json
import html
import requests


def usernameToUserId(user):
    r = requests.get('https://www.instagram.com/web/search/topsearch/?query=' + user, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0'}).text
    if json.loads(r).get("message") == 'rate limited':
        print(
            '[x] Rate limit reached!\n[#] Unchecked Username: {}\n[!] Try again in a few minutes.\n'.format(user))
        exit()
    try:
        for i in range(len(json.loads(r)['users'])):
	        if json.loads(r)['users'][i]['user']['username'] == user:
        	    return json.loads(r)['users'][i]['user']['pk']
    except:
        return False


def useridToUsername(userid):
    # checkTokens()
    header = { 'User-Agent': 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 123.1.0.26.115 (iPhone11,8; iOS 13_3; en_US; en-US; scale=2.00; 828x1792; 190542906)'}
    r = requests.get(
        'https://i.instagram.com/api/v1/users/' + str(userid) + '/info/',
        headers=header).text
    response = json.loads(r)
    if response.get("message") == 'useragent mismatch':
        return False
    response['user']['profile_pic_url'] = html.unescape(response['user']['profile_pic_url'])
    return response



def main():
    parser = argparse.ArgumentParser(prog='InstaTracker.py')

    parser.add_argument('-u', '--user', action='store', dest='username',
                        help='Set Instagram username', type=str)
    parser.add_argument('-i', '--id', action='store', dest='id',
                        help='Set Instagram userID', type=int)
    args = parser.parse_args()

    if args.id is not None:
        username = useridToUsername(args.id)
        if not username:
            print('[-] UserID does not exist')
        else:
            print(username)

    if args.username is not None:
        userid = usernameToUserId(args.username)
        if not userid:
            print('[-] Username does not exist')
        else:
            print(userid)

    if args.id is None and args.username is None:
        parser.print_help()


if __name__ == '__main__':
    main()