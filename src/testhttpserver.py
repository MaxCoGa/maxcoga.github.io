import http.server

HandlerClass = http.server.SimpleHTTPRequestHandler

HandlerClass.extensions_map['.js'] = 'text/javascript'
HandlerClass.extensions_map['.mjs'] = 'text/javascript'

http.server.test(HandlerClass, port=8000)