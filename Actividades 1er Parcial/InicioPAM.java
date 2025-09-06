import javax.swing.JOptionPane;

public class InicioPAM {

    public static void main(String[] args) {
        String opcion;
        do {
            opcion = JOptionPane.showInputDialog("Menú - Inicio PAM\n1. Reglamento POO\n2. Lineamientos Classroom\n3. Fechas de Parciales\n4. Porcentajes por Parcial\n5. Salir\n\nElige una opción:");

            if (opcion == null) break;

            switch (opcion) {
                case "1":
                    JOptionPane.showMessageDialog(null, "Reglamento POO:\n\n1. Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\n\n2. Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de inicio: 7:00 a.m y 14:00 p.m).\n\n3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta. Solo se aceptan recetas médicas y citatorios jurídicos.\n\n4. Las tareas y trabajos deberán subirse al Classroom de forma individual y no se recibirán de manera extemporánea (salvo previo justificante validado por el tutor).\n\n5. Las tareas y trabajos deben presentarse en tiempo y forma. La demora sin justificante o con justificante fuera del límite no se acepta.\n\n6. Utilizar el correo institucional para trabajar bajo Google Classroom.\n\n7. El plagio o copia de trabajos y/o exámenes resultará en reprobar la asignatura y se reportará al área correspondiente.\n\n8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final.\n\n9. Indisciplina o falta de respeto: primera llamada de atención; si se repite, abandono del aula. Tres incidencias = no derecho a examen.\n\n10. Uso de laptops y dispositivos móviles solo para actividades requeridas.\n\n11. Prohibido el uso de audífonos durante la clase.\n\n12. Prohibido comer y/o tomar líquidos en el salón.\n\n13. Prohibido sentarse encima de las mesas o columpiarse en las sillas.\n\n14. Todo tema académico debe revisarse primero con el docente, luego con tutor, y si no se resuelve, con la coordinación y dirección del programa.\n\n15. Situaciones no previstas se consultan directamente con la dirección del programa educativo.\n\n16. Día de entrega de calificaciones: todos los estudiantes deben estar presentes para recibir exámenes y retroalimentación.\n\n17. Este reglamento entra en vigor una vez firmado o aceptado por la mayoría de los estudiantes presentes en la primera sesión (50% + jefe de grupo). Válido para todos los inscritos, aunque no asistieran.");
                    break;
                case "2":
                    JOptionPane.showMessageDialog(null, "Lineamientos Classroom:\n\n- Entregar los trabajos para su revisión.\n- Entregas en PDF.\n- Avisos de clase.\n- Entregas autorizadas con retraso (máximo 5 calificaciones).");
                    break;
                case "3":
                    JOptionPane.showMessageDialog(null, "Fechas de Parciales:\n\n1er Parcial: 01-10-25\n2do Parcial: 05-10-25\n3er Parcial: 03-12-25\nFinal: 08-12-25");
                    break;
                case "4":
                    JOptionPane.showMessageDialog(null, "Porcentajes por Parcial:\n\n1P: 40-20-30-10\n2P: 40-20-20-20\n3P: 20-10-40-30");
                    break;
                case "5":
                    JOptionPane.showMessageDialog(null, "Vuela alto Cardenal");
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "Opción inválida, ingrese nuevamente.");
            }

        } while (!"5".equals(opcion));
    }
}
