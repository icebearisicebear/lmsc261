import tkinter as tk
root = tk.Tk()
root.geometry("400x400")

label = tk.Label(root, text = "Label")
entry = tk.Entry(root)
entry.pack()
label.pack()
def change_label_text():
    entry_text = "Hello, " + entry.get()
    label.config(text = entry_text)
    entry.delete(0, 'end')



button = tk.Button(root, text = "Submit", command = change_label_text)
button.pack()




root.mainloop()