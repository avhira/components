# How to use
### 1. Import your Audio in component

```bash
import music from './[your audio path]';;
```

### 2. Import Component

```bash
import Audios from './[your file path]';
```

### 3. Use component 

the value of data will be boolean / true or false
```bash
 <Audios isAudioPlaying={[your data]} />;
```

### 4. Icon
I use icon in this component from bootstrap-icon if you want something diference you can change the code in this part :  
```bash
 <i className={`bi ${audioPlaying ? 'bi-pause-circle' : 'bi-disc'}`}></i>
```

### Preview
<img src="img/preview.PNG" width='30%' style="border: 1px solid white;">'       '<img src="img/previews.PNG" width='25%' style="border: 1px solid white;">
