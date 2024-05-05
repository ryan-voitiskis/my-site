#!/bin/bash

# ffmpeg -i original.mp4 -ss 00:00:013.5 -t 00:00:05 -c copy -an output.mp4

# the outputs here were intended to be used like srcset, but video is different

# 240p (0.5x)
ffmpeg -i strobo-0.mp4 -vf scale=-2:240 -c:v libx264 -preset veryslow -crf 28 -c:a aac -b:a 64k -movflags +faststart strobo-0-240p.mp4

# 360p (0.75x)
ffmpeg -i strobo-0.mp4 -vf scale=-2:360 -c:v libx264 -preset veryslow -crf 28 -c:a aac -b:a 96k -movflags +faststart strobo-0-360p.mp4

# 480p (1x)
ffmpeg -i strobo-0.mp4 -vf scale=-2:480 -c:v libx264 -preset veryslow -crf 28 -c:a aac -b:a 128k -movflags +faststart strobo-0-480p.mp4

# 720p (1.5x)
ffmpeg -i strobo-0.mp4 -vf scale=-2:720 -c:v libx264 -preset veryslow -crf 28 -c:a aac -b:a 128k -movflags +faststart strobo-0-720p.mp4

# 1080p (2x)
ffmpeg -i strobo-0.mp4 -vf scale=-2:1080 -c:v libx264 -preset veryslow -crf 28 -c:a aac -b:a 128k -movflags +faststart strobo-0-1080p.mp4

# 1440p (2.5x)
ffmpeg -i strobo-0.mp4 -vf scale=-2:1440 -c:v libx264 -preset veryslow -crf 28 -c:a aac -b:a 192k -movflags +faststart strobo-0-1440p.mp4

# 1920p (3x)
ffmpeg -i strobo-0.mp4 -vf scale=-2:1920 -c:v libx264 -preset veryslow -crf 28 -c:a aac -b:a 192k -movflags +faststart strobo-0-1920p.mp4