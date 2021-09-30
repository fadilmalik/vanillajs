const anchestor = [
    {
        name: "H. Mugni",
        child: [
            {
                name: "Umi",
                child: [
                    {
                        name: "Asep Muplih",
                        child: [
                            {
                                name: "Virza Maulana",
                            },
                            {
                                name: "Lusna Safia",
                            },
                        ],
                    },
                    {
                        name: "Mulyana",
                        child: [
                            {
                                name: "Khanza Aulia",
                            },
                        ],
                    },
                    {
                        name: "Mukti",
                        child: [
                            {
                                name: "Falisa Zoya",
                            },
                        ],
                    },
                    {
                        name: "Fadil Malik",
                    },
                ],
            },
            {
                name: "Kang H.",
                child: [
                    {
                        name: "Nabila Aulia",
                    },
                    {
                        name: "Fahad Malik",
                    },
                    {
                        name: "Salman",
                    },
                    {
                        name: "Zia",
                    },
                ],
            },
        ],
    },
];

console.log(anchestor);

function renderAnchestor(node, depth = 0) {
    let inheritance = "",
    space = "";

    for (let i = 0; i < depth; i++) {
        inheritance += "-";
        space += " ";  
    }

    node.forEach(function (item) {
        console.log(
            `${depth > 0 ? space + "└" + inheritance + "" : ""}${item.name}`
        );

        if (item.child) renderAnchestor(item.child, (depth += 1));
    });
}

renderAnchestor(anchestor, 0)