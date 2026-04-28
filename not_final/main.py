import tkinter as tk
import math
import sys

#defaults
root = tk.Tk()
canvas_width = 210
canvas_height = 297
zoom = 2
is_debug = tk.BooleanVar()

#debug toggle
def debug_toggle():
    if is_debug.get():
        print('! Debug On')
    else:
        print('! Debug Off')

#zoom logic
def zin():
    global zoom
    zoom = zoom + .25
    if is_debug:
        print('Debug: Zoom level set to ' + str(zoom))   
    canvas_window.geometry(f"{math.ceil(canvas_width * zoom)}x{math.ceil(canvas_height * zoom)}")
    canvas.config(width=canvas_width*zoom, height=canvas_height*zoom)
    zoom_display.config(text=f"{zoom * 100}" + "%")

def zout():
    global zoom
    if zoom > .25:
        zoom = zoom - .25
    if is_debug:
        print('Debug: Zoom level set to ' + str(zoom))    
    canvas_window.geometry(f"{math.ceil(canvas_width * zoom)}x{math.ceil(canvas_height * zoom)}")
    canvas.config(width=canvas_width*zoom, height=canvas_height*zoom)
    zoom_display.config(text=f"{zoom * 100}" + "%")

#command commitment
def enter(event):
    #placeholder logic
    import cmdinterpreter
    if is_debug:
        cmdinterpreter.debug_print(inputbox.get())
    result = cmdinterpreter.parse_command(inputbox.get(), is_debug)
    if is_debug:
        print(result)

    match result:
        case 'exit':
            exit()

    #more to come
    inputbox.delete(0, 'end')



#main window
root.title('Vivace')
root.geometry('600x400')
root.resizable(False, False)
root.bind('<Return>', enter)

#input box
input_frame=tk.LabelFrame(root,text = 'Command', width=580, height=75)
input_frame.place(x=10, rely=.6, anchor='nw')
inputbox = tk.Entry(input_frame, width=60)
inputbox.place(relx=.5, rely=.5, anchor=tk.CENTER)

#zoom controls
zoom_frame = tk.LabelFrame(root, text='Zoom controls', width=200, height=75, bd=2, relief='groove')
zoom_frame.place(x=10, rely=.8, anchor='nw')
zin_button = tk.Button(zoom_frame, text='Z+', command=zin)
zout_button = tk.Button(zoom_frame, text='Z-', command=zout)
zoom_display = tk.Label(zoom_frame, text= f"{zoom * 100}" + "%")
zin_button.place(relx=.75, rely=.5, anchor=tk.CENTER)
zoom_display.place(relx=.5, rely=.5, anchor=tk.CENTER)
zout_button.place(relx=.25, rely=.5, anchor=tk.CENTER)

#toggle debug
debug_check = tk.Checkbutton(text='Debug', variable=is_debug, command=debug_toggle)
debug_check.place(relx=.7, rely=.905)

#exit
exit_button = tk.Button(text='Quit', command=exit)
exit_button.place(relx=.85, rely=.9)

#canvas window
canvas_window = tk.Toplevel()
canvas_window.title('Canvas')
canvas_window.geometry(f"{canvas_width * zoom}x{canvas_height * zoom}")
canvas_window.resizable(False, False)

#setup canvas
canvas = tk.Canvas(canvas_window, width=canvas_width * zoom, height = canvas_height * zoom, bg='white')
canvas.pack()




root.mainloop()