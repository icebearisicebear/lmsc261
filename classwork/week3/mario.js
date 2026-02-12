let numBlocks = prompt("How many blocks?");

for (let row = 0; row < numBlocks; row++)
{
    let blocks = [];
    for (let col = numBlocks; col > 0; col--)
    {
        if(row < col)
        {
            blocks.push("_");
        } else {
            blocks.push("#");
        }
    }
    print(blocks);
}