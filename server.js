const http = require('http')

// Импортируемм обработчик маршрутов
const routeHandler = require('./routes/router')

// Создание HTTP сервера
const server = http.createServer(routeHandler)

// Запуск сервера на порту 3000
const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})