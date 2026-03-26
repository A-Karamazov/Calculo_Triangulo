class Triangulo {
    lado1: number = 0;
    lado2: number = 0;
    lado3: number = 0;

    constructor(lado1: number, lado2: number, lado3: number) {
        if (this.lado1 + this.lado2 < this.lado3 || this.lado1 + this.lado3 < this.lado2 || this.lado2 + this.lado3 < this.lado1) {
            

            }
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
        
    }


    tipo(lado1: number, lado2: number, lado3:  number, tipoTriangulo: string): string {
        if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
            return tipoTriangulo = "Equilátero";
        }
         if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            return tipoTriangulo = "Isósceles";
        } 
            return tipoTriangulo = "Escaleno";
    }

    calcularPerimetro(lado1: number, lado2: number, lado3: number): number {
         return (this.lado1 + this.lado2 + this.lado3) / 2;
    }
}
