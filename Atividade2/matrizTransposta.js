function transporMatriz(A) {

    // imprime o texto
    console.log("Matriz Original:"); 
    
    // cria a matriz/ tabela
    console.table(A);

    // analisa todo o index e cria linhas no lugar das colunas e vice-versa 
    let transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));

    //imprime o texto
    console.log("Matriz Transposta:");

    // imprime a matriz transposta
    console.table(transposta);

    return transposta;
}

// Teste com a matriz do exercício
const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);
