# How to use
### 1. Import component

```bash
import Timer from './[your file path]';
```

### 2. Use component

```bash
<Timer />;
```

### 3. Change your time

```bash
  const targetYear = 0;
  const targetMonth = 0; // month in JavaScript (start from 0)
  const targetDay = 0;
  const targetHour = 0;
  const targetMinute = 0;
  const targetSecond = 0;
```

### 5. If time over
you can change this part with your style
```bash
<span>Your time has over!</span>
```

### 5. Add style here
```bash
      <div>
          <div>
            {timeLeft.days}
            <span>Hari</span>
          </div>
          <div>
            {timeLeft.hours}
            <span>Jam</span>
          </div>
          <div>
            {timeLeft.minutes}
            <span>Menit</span>
          </div>
          <div>
            {timeLeft.seconds}
            <span>Detik</span>
          </div>
        </div>
```
