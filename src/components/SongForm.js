import React, { useState } from 'react';


const initialForm = {
    artist: "",
    song: "",
};


const SongForm = ({handleSearch, handelSaveSong}) => {
    const [form, setForm] = useState(initialForm);

    const [isDisabled, setIsDisabled] = useState(true);


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.artist || !form.song) {
            alert("Datos incompletos");
            setIsDisabled(true);
            return;
        }
        
        handleSearch(form);
        setForm(initialForm);

        setIsDisabled(false);
    };

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="artist" 
                    placeholder="Nombre del interprete" 
                    onChange={handleChange} 
                    value={form.artist} />

                <input 
                    type="text" 
                    name="song" 
                    placeholder="Nombre de la Canción" 
                    onChange={handleChange} 
                    value={form.song} />

                <input type="submit" value="Enviar" />

                <input type="button" onClick={handelSaveSong} value="Agregar Cancion" disabled={isDisabled && "disabled"} />
            </form>
        </div>
     );
}
 
export default SongForm;