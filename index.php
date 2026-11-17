<?php
// Vitalia - Almacén Saludable
// Redirección o carga directa del panel interactivo
if (file_exists(__DIR__ . '/index.html')) {
    include_once __DIR__ . '/index.html';
} else {
    echo "Error: index.html no encontrado.";
}
