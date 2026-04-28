def debug_print(cmd_raw):
    print('! Received: ' + cmd_raw)

def parse_command(cmd_raw, is_debug):
    cmd, sep, args_raw = cmd_raw.partition('/')
    args = args_raw.split('/')
    
    if is_debug:
        print('! Command: ' + cmd)
        print('! Args_Raw: ' + args_raw)
        print(*args)

    match cmd.lower().strip():
        case 'exit':
            return 'exit'
        
        case 'debug':
            return 'debug'
        
