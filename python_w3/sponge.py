import tkinter as tk
root = tk.Tk()
root.geometry("400x300")


#Logic
SPONGE_LIMIT = .5
def calculate_sponge_needed():
    cups_spilled = sponge_entry.get()
    sponge_needed = int(cups_spilled) / SPONGE_LIMIT
    format_text = str(sponge_needed) + " sponges."
    display_label.config(text = format_text)


#UI
sponge_entry = tk.Entry(root)
sponge_entry.pack()
submit_button = tk.Button(root, text = "Calculate", command = calculate_sponge_needed)
submit_button.pack()

display_label = tk.Label(root)
display_label.pack()

root.mainloop()