class Triangulo {
    lado1: number = 0;
    lado2: number = 0;
    lado3: number = 0;
    tipoTriangulo: string = "";
    semiperimetro: number = 0;

    constructor(lado1: number, lado2: number, lado3: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
        this.semiperimetro = semiperimetro;
    }


    tipo(lado1: number, lado2: number, lado3:  number, tipoTriangulo: string): string {
        if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
            return tipoTriangulo = "Equilátero";
        } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            return tipoTriangulo = "Isósceles";
        } else {
            return tipoTriangulo = "Escaleno";
        }
    }

    calcularArea(lado1: number, lado2: number, lado3: number): number {
        semiperimetro = (lado1)
        return 0;
    }
}
