/**
 * VITALIA - ALMACÉN SALUDABLE
 * MÓDULO INTERACTIVO 4 & 4.b: ELEVATOR PITCH, TELEPROMPTER Y GRABADOR AUDIOVISUAL
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar Teleprompter y Timer
  initTeleprompter();
  // Inicializar Grabador Audiovisual
  initMediaRecorder();
  // Inicializar Text to Speech
  initSpeechSynthesizer();
});

let scrollInterval = null;
let isScrolling = false;
let scrollSpeed = 2; // px por tick
let timerSeconds = 0;
let timerInterval = null;

function initTeleprompter() {
  const screen = document.getElementById('teleprompterScreen');
  const btnToggle = document.getElementById('btnTogglePrompter');
  const btnReset = document.getElementById('btnResetPrompter');
  const speedSlider = document.getElementById('prompterSpeed');
  const speedValueDisplay = document.getElementById('speedValueDisplay');
  const timerDisplay = document.getElementById('pitchTimerDisplay');
  const timerBadge = document.getElementById('timerStatusBadge');

  if (!screen || !btnToggle) return;

  if (speedSlider) {
    speedSlider.addEventListener('input', (e) => {
      scrollSpeed = parseInt(e.target.value, 10);
      if (speedValueDisplay) speedValueDisplay.textContent = `${scrollSpeed}x`;
    });
  }

  btnToggle.addEventListener('click', () => {
    if (isScrolling) {
      pausePrompter();
    } else {
      startPrompter();
    }
  });

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      pausePrompter();
      screen.scrollTop = 0;
      resetTimer();
    });
  }

  function startPrompter() {
    isScrolling = true;
    btnToggle.innerHTML = '⏸️ Pausar Lectura';
    btnToggle.classList.remove('btn-success');
    btnToggle.classList.add('btn-danger');

    // Iniciar auto-scroll
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
      if (screen.scrollTop + screen.clientHeight >= screen.scrollHeight - 5) {
        pausePrompter();
      } else {
        screen.scrollTop += scrollSpeed;
      }
    }, 40);

    // Iniciar temporizador
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
      }, 1000);
    }
  }

  function pausePrompter() {
    isScrolling = false;
    clearInterval(scrollInterval);
    clearInterval(timerInterval);
    timerInterval = null;
    if (btnToggle) {
      btnToggle.innerHTML = '▶️ Iniciar Teleprompter';
      btnToggle.classList.remove('btn-danger');
      btnToggle.classList.add('btn-success');
    }
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 0;
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    if (!timerDisplay) return;
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timerDisplay.textContent = formatted;

    // Regla de consigna: Duración ideal entre 1:30 (90s) y 3:00 (180s)
    if (timerBadge) {
      if (timerSeconds < 90) {
        timerBadge.textContent = 'En desarrollo (Meta: 1:30 - 3:00 min)';
        timerBadge.style.color = '#d97706';
      } else if (timerSeconds <= 180) {
        timerBadge.textContent = '¡Rango Óptimo Alcanzado! (1:30 a 3:00 min)';
        timerBadge.style.color = '#10b981';
      } else {
        timerBadge.textContent = 'Excedió los 3:00 minutos reglamentarios';
        timerBadge.style.color = '#ef4444';
      }
    }
  }
}

// Síntesis de voz para escuchar el Pitch Elevator
function initSpeechSynthesizer() {
  const btnSpeak = document.getElementById('btnSpeakPitch');
  if (!btnSpeak) return;

  let isSpeaking = false;

  btnSpeak.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta síntesis de voz.');
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      btnSpeak.innerHTML = '🔊 Escuchar Discurso con IA';
      btnSpeak.classList.remove('btn-danger');
      btnSpeak.classList.add('btn-secondary');
      return;
    }

    const textToSpeak = window.VitaliaData.punto4.textoPitch;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'es-AR';
    utterance.rate = 1.0;

    utterance.onend = () => {
      isSpeaking = false;
      btnSpeak.innerHTML = '🔊 Escuchar Discurso con IA';
      btnSpeak.classList.remove('btn-danger');
      btnSpeak.classList.add('btn-secondary');
    };

    window.speechSynthesis.speak(utterance);
    isSpeaking = true;
    btnSpeak.innerHTML = '⏹️ Detener Audio';
    btnSpeak.classList.remove('btn-secondary');
    btnSpeak.classList.add('btn-danger');
  });
}

// Grabador Audiovisual WebRTC y MediaRecorder
function initMediaRecorder() {
  const btnStartRec = document.getElementById('btnStartRecord');
  const btnStopRec = document.getElementById('btnStopRecord');
  const videoLive = document.getElementById('videoLivePreview');
  const videoRecorded = document.getElementById('videoRecordedPreview');
  const recordedContainer = document.getElementById('recordedVideoContainer');
  const btnDownloadVideo = document.getElementById('btnDownloadVideo');
  const recIndicator = document.getElementById('recIndicator');

  if (!btnStartRec || !btnStopRec) return;

  let mediaRecorder = null;
  let recordedChunks = [];
  let stream = null;

  btnStartRec.addEventListener('click', async () => {
    try {
      recordedChunks = [];
      stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: true
      });

      if (videoLive) {
        videoLive.srcObject = stream;
        videoLive.play();
        videoLive.style.display = 'block';
      }

      if (recordedContainer) recordedContainer.style.display = 'none';

      const options = { mimeType: 'video/webm;codecs=vp9,opus' };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        options.mimeType = 'video/webm';
      }

      mediaRecorder = new MediaRecorder(stream, options);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const videoURL = URL.createObjectURL(blob);

        if (videoRecorded) {
          videoRecorded.src = videoURL;
          if (recordedContainer) recordedContainer.style.display = 'block';
        }

        if (btnDownloadVideo) {
          btnDownloadVideo.href = videoURL;
          btnDownloadVideo.download = `Vitalia_Pitch_Elevator_${new Date().toISOString().slice(0,10)}.webm`;
        }

        // Detener tracks
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
        if (videoLive) videoLive.style.display = 'none';
      };

      mediaRecorder.start();
      btnStartRec.style.display = 'none';
      btnStopRec.style.display = 'inline-flex';
      if (recIndicator) recIndicator.style.display = 'flex';

    } catch (err) {
      console.error('Error al acceder a cámara o micrófono:', err);
      alert('Para grabar el pitch en vivo, concede permisos de cámara y micrófono en tu navegador.');
    }
  });

  btnStopRec.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    btnStartRec.style.display = 'inline-flex';
    btnStopRec.style.display = 'none';
    if (recIndicator) recIndicator.style.display = 'none';
  });
}
