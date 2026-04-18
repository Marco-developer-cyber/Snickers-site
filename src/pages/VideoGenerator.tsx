import { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export default function VideoGenerator() {
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('A cinematic shot of the object');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        const base64Split = dataUrl.split(',');
        setImage(base64Split[1]);
        setMimeType(file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    if (!image || !mimeType) {
      setError('Please upload an image first.');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setVideoUrl(null);
    
    try {
      setLoadingMessage('Initializing AI Studio integration...');
      
      let hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await window.aistudio.openSelectKey();
        hasKey = await window.aistudio.hasSelectedApiKey();
      }

      setLoadingMessage('Starting Veo video generation...');
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Missing GEMINI_API_KEY.");
      }

      const ai = new GoogleGenAI({ apiKey });

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        image: {
          imageBytes: image,
          mimeType: mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      const loadingMessages = [
        "Analyzing image composition...",
        "Setting up scenes...",
        "Rendering temporal details...",
        "Applying cinematic lighting...",
        "Finalizing video generation..."
      ];
      let msgIndex = 0;

      while (!operation.done) {
        setLoadingMessage(loadingMessages[msgIndex % loadingMessages.length]);
        msgIndex++;
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      
      if (!downloadLink) {
        throw new Error("Video generation failed or returned no URI.");
      }

      setLoadingMessage('Fetching generated video...');

      const response = await fetch(downloadLink, {
        method: 'GET',
        headers: {
          'x-goog-api-key': apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to load video file.");
      }

      const videoBlob = await response.blob();
      const videoObjectUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoObjectUrl);

    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setError("API Key error. Please try generating again to select a valid paid API key.");
      } else {
        setError(err.message || 'An error occurred during video generation.');
      }
    } finally {
      setIsGenerating(false);
      setLoadingMessage('');
    }
  };

  return (
    <div className="flex-grow px-6 md:px-12 max-w-[1920px] mx-auto w-full mb-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 border-b-2 border-surface-container-high pb-6">
          <h2 className="font-label text-on-surface-variant uppercase tracking-widest text-sm mb-2">AI LAB</h2>
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">ANIMATE YOUR KICKS</h1>
          <p className="mt-4 font-body text-zinc-400">Transform static product images into cinematic video drops using Veo Models.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-8">
            <div className="bg-surface-container-low p-6 border border-outline-variant/20">
              <h3 className="font-headline uppercase font-bold text-xl mb-4">1. REFERENCE IMAGE</h3>
              
              {!image ? (
                <div 
                  className="aspect-[4/3] border-2 border-dashed border-outline-variant/40 flex flex-col items-center justify-center cursor-pointer hover:border-primary-container transition-colors group"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <span className="material-symbols-outlined text-4xl mb-4 text-zinc-600 group-hover:text-primary-container">upload</span>
                  <p className="font-label uppercase text-sm tracking-widest text-zinc-500 group-hover:text-white">Upload Reference</p>
                </div>
              ) : (
                <div className="relative aspect-[4/3] bg-black overflow-hidden flex items-center justify-center">
                  <img src={`data:${mimeType};base64,${image}`} alt="Reference" className="object-contain w-full h-full" />
                  <button 
                    className="absolute top-4 right-4 bg-surface-container-highest p-2 hover:text-primary-container"
                    onClick={() => { setImage(null); setMimeType(null); }}
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              )}
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            </div>

            <div className="bg-surface-container-low p-6 border border-outline-variant/20">
              <h3 className="font-headline uppercase font-bold text-xl mb-4">2. DIRECTORIAL PROMPT</h3>
              <textarea 
                className="w-full bg-surface-container-lowest border-b-2 border-outline-variant/30 text-white font-body p-4 focus:outline-none focus:border-primary-container transition-colors resize-none placeholder-zinc-600"
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the motion and scene..."
              />
            </div>

            <div className="bg-surface-container-low p-6 border border-outline-variant/20">
              <h3 className="font-headline uppercase font-bold text-xl mb-4">3. FORMAT (ASPECT RATIO)</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => setAspectRatio('16:9')}
                  className={`flex-1 py-4 font-label uppercase font-bold border-2 transition-all ${aspectRatio === '16:9' ? 'border-primary-container text-white' : 'border-outline-variant/30 text-zinc-500 hover:text-white'}`}
                >
                  16:9 Landscape
                </button>
                <button 
                  onClick={() => setAspectRatio('9:16')}
                  className={`flex-1 py-4 font-label uppercase font-bold border-2 transition-all ${aspectRatio === '9:16' ? 'border-primary-container text-white' : 'border-outline-variant/30 text-zinc-500 hover:text-white'}`}
                >
                  9:16 Portrait
                </button>
              </div>
            </div>

            <button 
              onClick={generateVideo}
              disabled={isGenerating || !image}
              className={`w-full py-6 font-headline font-black text-xl uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${isGenerating || !image ? 'bg-surface-container-highest text-zinc-500 cursor-not-allowed' : 'bg-primary-container text-on-primary-container hover:scale-[1.02] cursor-pointer'}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}
            >
              {isGenerating ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  GENERATING...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">movie</span>
                  GENERATE VIDEO
                </>
              )}
            </button>
            {error && (
              <p className="text-red-400 font-label text-sm uppercase px-4 py-3 bg-red-900/20 border border-red-900 mt-4">
                ERROR: {error}
              </p>
            )}
          </div>

          {/* Output */}
          <div className="bg-surface-container-lowest p-6 border border-outline-variant/10 flex flex-col items-center justify-center relative min-h-[500px]">
             {isGenerating ? (
                <div className="flex flex-col items-center justify-center gap-6 max-w-[80%] text-center">
                  <div className="w-16 h-16 border-4 border-surface-container-high border-t-primary-container rounded-full animate-spin"></div>
                  <p className="font-label font-bold text-primary-container text-lg tracking-widest uppercase animate-pulse">PROCESSING RENDER</p>
                  <p className="font-mono text-zinc-500 text-sm">{loadingMessage}</p>
                </div>
             ) : videoUrl ? (
                <div className="w-full h-full flex flex-col gap-4">
                  <h3 className="font-headline uppercase font-bold text-xl text-primary-container shrink-0">GENERATED OUTPUT</h3>
                  <div className="relative w-full h-full bg-black flex-grow flex items-center justify-center overflow-hidden">
                    <video 
                      src={videoUrl} 
                      controls 
                      autoPlay 
                      loop 
                      className={`max-w-full max-h-[600px] object-contain shadow-[0_0_40px_rgba(255,86,45,0.15)]`}
                    />
                  </div>
                </div>
             ) : (
               <div className="flex flex-col items-center justify-center text-zinc-600 gap-4">
                  <span className="material-symbols-outlined text-6xl opacity-30">movie</span>
                  <p className="font-label uppercase tracking-widest text-sm">Awaiting Generation</p>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
