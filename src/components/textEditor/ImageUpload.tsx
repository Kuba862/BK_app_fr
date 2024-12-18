import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tiptap/react';
import styled from 'styled-components';
import { FaUpload, FaExpand } from "react-icons/fa";
import { ToolbarGroup, ButtonGroup, UploadButton, ResizeButton, PopupOverlay, PopupContent, DimensionsContainer, DimensionLabel, DimensionInput, HiddenInput } from '../../style/ImageUplad';

interface ImageUploadProps {
  editor: Editor | null;
}

const ImageUpload = ({ editor }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [showResizePopup, setShowResizePopup] = useState<boolean>(false);
  const [selectedImageNode, setSelectedImageNode] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!editor) return;
  
    const updateSelection = () => {
      const { state } = editor;
      const { selection } = state;
      const { empty, anchor } = selection;
  
      // Sprawdź, czy zaznaczenie jest na węźle obrazu
      const node = state.doc.nodeAt(anchor);
      if (node?.type.name === 'image') {
        // Znajdź element DOM odpowiadający zaznaczonemu obrazowi
        const image = editor.view.dom.querySelector(
          `img[src="${node.attrs.src}"]`
        ) as HTMLImageElement;
  
        if (image) {
          setSelectedImageNode(image);
          setDimensions({
            width: image.width,
            height: image.height
          });
          return;
        }
      }
  
      // Jeśli nie znaleziono obrazu, wyczyść zaznaczenie
      setSelectedImageNode(null);
    };
  
    // Nasłuchuj na zmiany zaznaczenia
    editor.on('selectionUpdate', updateSelection);
    editor.on('focus', updateSelection);
  
    return () => {
      editor.off('selectionUpdate', updateSelection);
      editor.off('focus', updateSelection);
    };
  }, [editor]);

  const validateFileType = (file: File): boolean => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    return allowedTypes.includes(file.type);
  }

  // const getSelectedImage = (): HTMLImageElement | null => {
  //   if(!editor) return null;
  //   const node = editor.state.selection.$anchor.parent;
  //   if(node.type.name === 'image') {
  //     return editor.view.dom.querySelector(`img[src="${node.attrs.src}"]`);
  //   }
  //   return null;
  // }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    if(!validateFileType(file)) {
      alert('Nieprawidłowy format pliku. Dozwolone formaty: jpeg, jpg, png, gif, webp');
      if(fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result;
      if(typeof result === 'string') {
        setSelectedFile(result);
  
        const img = new Image();
        img.src = result;
        img.onload = () => {
          setDimensions({ width: img.width, height: img.height });
          editor?.chain().focus().deleteSelection().setImage({ 
            src: result,
          }).run();
        };
      }
    }
    reader.readAsDataURL(file);
  };

  const handleDimensionChange = (dimension: 'width' | 'height', value: number) => {
    if (!editor) return;
  
    setDimensions(prev => {
      const newDimensions = {
        ...prev,
        [dimension]: value
      };
  
      // Użyj selectedImageNode zamiast getSelectedImage
      if (selectedImageNode) {
        selectedImageNode.style[dimension] = `${value}px`;
        
        // Opcjonalnie: zachowaj proporcje
        if (dimension === 'width') {
          const aspectRatio = selectedImageNode.naturalHeight / selectedImageNode.naturalWidth;
          const newHeight = Math.round(value * aspectRatio);
          selectedImageNode.style.height = `${newHeight}px`;
          newDimensions.height = newHeight;
        } else {
          const aspectRatio = selectedImageNode.naturalWidth / selectedImageNode.naturalHeight;
          const newWidth = Math.round(value * aspectRatio);
          selectedImageNode.style.width = `${newWidth}px`;
          newDimensions.width = newWidth;
        }
      }
  
      return newDimensions;
    });
  };

  const handleResizeClick = () => {
    if (selectedImageNode) {
      setDimensions({
        width: selectedImageNode.width,
        height: selectedImageNode.height
      });
    }
    setShowResizePopup(true);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  if(!editor) return null;

  return (
    <>
      <ToolbarGroup>
      <ButtonGroup>
          <UploadButton onClick={handleButtonClick}>
            <FaUpload /> Wybierz zdjęcie
          </UploadButton>
          {(selectedFile || selectedImageNode) && (
            <ResizeButton onClick={handleResizeClick}>
              <FaExpand /> Zmień rozmiar
            </ResizeButton>
          )}
        </ButtonGroup>
        
        <HiddenInput
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
        />
      </ToolbarGroup>

      {showResizePopup && (
        <PopupOverlay onClick={() => setShowResizePopup(false)}>
          <PopupContent onClick={e => e.stopPropagation()}>
            <DimensionsContainer>
              <DimensionLabel>
                Szerokość:
                <DimensionInput
                  type="number"
                  value={dimensions.width}
                  onChange={(e) => handleDimensionChange('width', parseInt(e.target.value))}
                  min="1"
                />
                px
              </DimensionLabel>
              <DimensionLabel>
                Wysokość:
                <DimensionInput
                  type="number"
                  value={dimensions.height}
                  onChange={(e) => handleDimensionChange('height', parseInt(e.target.value))}
                  min="1"
                />
                px
              </DimensionLabel>
            </DimensionsContainer>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
};

export default ImageUpload;