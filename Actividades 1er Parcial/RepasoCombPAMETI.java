import javax.swing.JOptionPane;

public class RepasoCombPAMETI {
    public static void main(String[] args) {
        String opcion;
        do {
            opcion = JOptionPane.showInputDialog("Menú - Repaso Combinado de etica \n1. Que es la etica? \n2. La Etica como personas\n3. Etica y sociedad\n4. Pensamiento Critico\n5. Retos de la Etica en la actualidad\n6. Salir\n\nElige una opción:");

            if (opcion == null) break;

            switch (opcion) {
                case "1":
                    JOptionPane.showMessageDialog(null, "Estructuras de Control:\n\n- If, Else If, Else\n- Switch\n- For, While, Do While\n- Break y Continue");
                    break;
                case "2":
                    JOptionPane.showMessageDialog(null, "Arreglos:\n\n- Arreglos unidimensionales y multidimensionales\n- Manipulación de arreglos (inicialización, recorrido, modificación)");
                    break;
                case "3":
                    JOptionPane.showMessageDialog(null, "Métodos:\n\n- Definición y uso de métodos\n- Parámetros y retorno de valores\n- Sobrecarga de métodos");
                    break;
                case "4":
                    JOptionPane.showMessageDialog(null, "Clases y Objetos:\n\n- Definición de clases y creación de objetos\n- Atributos y métodos de instancia\n- Encapsulamiento, herencia y polimorfismo");
                    break;
                case "6":
                    JOptionPane.showMessageDialog(null, "Vuela alto Cardenal");
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Opción inválida, ingrese nuevamente.");
            }

        } while (!"5".equals(opcion));
    }
}
