import React, { Component, ChangeEvent, FormEvent } from 'react';
import styles from './GridView.module.css';

class ImageUpload extends Component<{ onUpload: (file: File) => void }, { file: File | null }> {
    constructor(props: { onUpload: (file: File) => void }) {
        super(props);
        this.state = {
            file: null
        };
    }

    handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        this.setState({ file: selectedFile });
        console.log('FileChange')
    };

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { file } = this.state;

        if (file) {
            this.props.onUpload(file);
            this.setState({ file: null });
        }


    };

    render() {
        const { file } = this.state;

        return (
            <div className={styles.imageUpload}>
                <form onSubmit={this.handleSubmit} >
                    <div className={styles.fileInputContainer}>
                        <input
                            type="file"
                            accept=".jpg,.jpeg,.png,.gif"
                            onChange={this.handleFileChange}
                            id="fileInput"
                            className={styles.fileInput}
                        />
                        <label htmlFor="fileInput" className={styles.chooseFileButton}>+</label>
                        {file && <span className={styles.fileName}>{file.name}</span>}
                        {file && <button className={styles.uploadButton} type="submit" disabled={!file}>Upload</button>}

                    </div>

                </form>
            </div>
        );
    }
}

export default ImageUpload;
