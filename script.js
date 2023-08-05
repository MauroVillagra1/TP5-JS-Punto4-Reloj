function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    const formattedDate = `${now.getDate().toString().padStart(2, '0')} ${getMonthName(now.getMonth())} ${now.getFullYear()}`;
    document.getElementById('timeDisplay').textContent = formattedTime;
    document.getElementById('dateDisplay').textContent = formattedDate;
  }
  
  function getMonthName(month) {
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return months[month];
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  