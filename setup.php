<?php
/**
 * VITALIA - ALMACÉN SALUDABLE
 * Script de inicialización y verificación del entorno local
 */

echo "========================================================\n";
echo "   VITALIA - ALMACÉN SALUDABLE (RANELAGH, BS. AS.)\n";
echo "   Plataforma Web de Plan de Negocios (20 Puntos)\n";
echo "========================================================\n\n";

// Verificar que existan los archivos fundamentales
$files = [
    'index.html' => 'Archivo Principal de la Aplicación',
    'css/styles.css' => 'Hojas de Estilo del Almacén',
    'js/data.js' => 'Base de Datos de los 20 Puntos',
    'js/pitch.js' => 'Módulo de Teleprompter y Pitch Elevator',
    'js/charts.js' => 'Módulo de Gráficos de Encuestas Chart.js',
    'js/calculator.js' => 'Calculadora Reactiva de Costos e Inversiones',
    'js/gantt.js' => 'Diagrama de Gantt de Gestión de Proyecto',
    'js/app.js' => 'Controlador de Navegación y Búsqueda'
];

$allOk = true;
foreach ($files as $file => $description) {
    if (file_exists(__DIR__ . '/' . $file)) {
        echo " [OK] " . str_pad($file, 20) . " -> " . $description . "\n";
    } else {
        echo " [FALTA] " . str_pad($file, 20) . "\n";
        $allOk = false;
    }
}

echo "\n";
if ($allOk) {
    echo ">> Todos los módulos interactivos verificados con éxito.\n";
    echo ">> Listo para iniciar servidor en http://localhost:8000\n";
} else {
    echo ">> Advertencia: Algunos archivos no fueron localizados.\n";
}
echo "========================================================\n";
