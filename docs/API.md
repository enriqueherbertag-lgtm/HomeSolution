https://api.homesolution.app/v1
Para desarrollo local: http://localhost:3000/api/v1

🔐 Autenticación
Registrar Usuario
POST /api/v1/auth/register

json
{
  "email": "ejemplo@gmail.com",
  "password": "clave123",
  "full_name": "Carlos López",
  "phone": "+56912345678",
  "user_type": "client"
}
Respuesta:

json
{
  "success": true,
  "user_id": 45,
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
Iniciar Sesión
POST /api/v1/auth/login

json
{
  "email": "ejemplo@gmail.com",
  "password": "clave123"
}
Respuesta:

json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user_type": "client"
}
👤 Usuario
Ver Mi Perfil
GET /api/v1/users/profile

Respuesta:

json
{
  "id": 45,
  "email": "ejemplo@gmail.com",
  "full_name": "Carlos López",
  "phone": "+56912345678",
  "user_type": "client",
  "rating": 4.5
}
🔧 Técnicos
Buscar Técnicos Cercanos
GET /api/v1/technicians/nearby

Parámetros:

text
?lat=-33.4489&lng=-70.6693&category=plumbing
Respuesta:

json
{
  "technicians": [
    {
      "id": 12,
      "name": "Juan Fontanero",
      "rating": 4.8,
      "distance": "1.2 km",
      "price_per_hour": 15000,
      "categories": ["plumbing", "electricity"]
    }
  ]
}
📋 Solicitudes de Servicio
Crear Nueva Solicitud
POST /api/v1/requests

json
{
  "category": "plumbing",
  "description": "Fuga de agua en el baño",
  "latitude": -33.4489,
  "longitude": -70.6693
}
Respuesta:

json
{
  "request_id": 789,
  "status": "pending",
  "estimated_price": 25000
}
Ver Mis Solicitudes
GET /api/v1/requests

Respuesta:

json
{
  "requests": [
    {
      "id": 789,
      "category": "plumbing",
      "description": "Fuga de agua en el baño",
      "status": "accepted",
      "technician_name": "Juan Fontanero",
      "price": 25000
    }
  ]
}
💬 Chat
Enviar Mensaje
POST /api/v1/chat/message

json
{
  "request_id": 789,
  "message": "Hola, llego en 20 minutos"
}
💳 Pagos
Crear Pago
POST /api/v1/payments/create

json
{
  "request_id": 789,
  "amount": 25000
}
Respuesta:

json
{
  "payment_id": "pay_12345",
  "client_secret": "pi_123_secret_456"
}
🚨 Códigos de Error
Código	Significado
200	Todo OK
400	Datos incorrectos
401	No autorizado (token inválido)
404	No encontrado
500	Error del servidor
📞 Soporte
Para preguntas técnicas: eaguayo@migst.cl


