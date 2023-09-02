export function aqiToCategory(aqi: number) {
    if (aqi <= 50) {
        return {message: "Качество воздуха хорошее", color: "text-emerald-500"};
    }
    else if (aqi <= 100) {
        return {message: "Качество воздуха удовлетворительное", color: "text-orange-400"};
    }
    else if (aqi <= 150) {
        return {message: "Качество воздуха неудовлетворительное", color: "text-rose-300"};
    }
    else if (aqi <= 200) {
        return {message: "Качество воздуха плохое", color: "text-rose-500"};
    }
    else if (aqi <= 300) {
        return {message: "Качество воздуха очень плохое", color: "text-red-500"};
    }
    else {
        return {message: "Качество воздуха опасное", color: "text-red-700"};
    }
}