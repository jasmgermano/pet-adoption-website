'use client';
import {Container} from './Container'
import {Title} from './Title'
import { useEffect } from 'react'

import Image from 'next/image'
import Bone from '@/assets/bone.svg'
import Paw from '@/assets/paw.svg'

export {};

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      }
    };
  }
}

interface InstagramPostProps {
    postUrl: string;
}

interface TikTokEmbedProps {
    username: string;
}

const InstagramPost: React.FC<InstagramPostProps> = ({ postUrl }) => {
    useEffect(() => {
        const processInstagramPost = () => {
            if (window.instgrm && window.instgrm.Embeds) {
                window.instgrm.Embeds.process();
            }
        };

        if (!window.instgrm) {
            const script = document.createElement('script');
            script.src = "//www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
            script.onload = processInstagramPost;
        } else {
            processInstagramPost();
        }
    }, [postUrl]);

    return (
        <blockquote
            className="instagram-media"
            data-instgrm-permalink={postUrl}
            data-instgrm-version="14"
            style={{ maxWidth: '340px', width: '100%', margin: 'auto' }}>
        </blockquote>
    );
};

const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ username }) => {
    useEffect(() => {
        // Função para carregar o script do TikTok
        const loadScript = () => {
            if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
                const script = document.createElement('script');
                script.src = "https://www.tiktok.com/embed.js";
                script.async = true;
                document.body.appendChild(script);
            }
        };

        loadScript();
    }, [username]); 

    return (
        <blockquote className="tiktok-embed" 
                    cite={`https://www.tiktok.com/@${username}`} 
                    data-unique-id={username} 
                    data-embed-type="creator" 
                    style={{ maxWidth: '780px', minWidth: '288px' }}>
            <section>
                <a target="_blank" href={`https://www.tiktok.com/@${username}?refer=creator_embed`}>@{username}</a>
            </section>
        </blockquote>
    );
};

export function SocialMedia () {
    return (
        <div>
            <div id="contato" className="relative h-auto overflow-hidden bg-custom-red top-0 py-20">
                <div className="absolute top-0 left-0 w-full z-20">
                    <svg viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,122.7C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-20">
                    <svg viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,133.3C672,128,768,160,864,160C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="absolute top-36 -left-14 z-0">
                    <Image src={Bone} alt="Osso" className="w-28" />
                </div>
                <div className="absolute top-1/3 -right-7 z-0">
                    <Image src={Paw} alt="Pata" className="w-20 -rotate-[70deg]" />
                </div>
                <div className="absolute bottom-60 -right-14 z-0">
                    <Image src={Bone} alt="Osso" className="w-28 -rotate-90" />
                </div>
                <div className="absolute bottom-10 -left-10 z-0">
                    <Image src={Paw} alt="Pata" className="w-28" />
                </div>

                <div className="h-[80%] z-10 flex justify-center">
                    <Container>
                        <div>
                            <div className='mb-10'>
                                <Title text="Divulgue nossas redes sociais!" color="text-white" />
                            </div>
                            <div className="flex justify-center">
                                <InstagramPost postUrl="https://www.instagram.com/p/Cw-WJS3Lzvp/?utm_source=ig_embed&amp;utm_campaign=loading" />
                            </div>
                            <div className="mt-10">
                                <TikTokEmbed username="adotarelegau" />
                            </div>
                        </div>
                    </Container>                  
                </div>
            </div>
        </div>
    )
}

