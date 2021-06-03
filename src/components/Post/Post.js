import Nav from '../Nav/Nav';
import { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const Post = () => {
	const [data, setData] = useState(EditorState.createEmpty());
	const [htmlData, setHtmlData] = useState('');

	const [tagsList, setTagsList] = useState([]);
    const [tagsdata, settagsdata] = useState('');

	const setTags = (newTags) => {
		console.log(newTags.join()); // string conversion
        settagsdata(newTags.join());
		setTagsList(newTags);
	};

	const updateData = (newData) => {
		try {
			var s = draftToHtml(convertToRaw(newData.getCurrentContent()));
			setHtmlData(s);
			setData(newData);
		} catch (err) {
			return;
		}
	};
	return (
		<div>
			<Nav showimagenav={false} showtextnav='true' />
			<div className='conatiner mt-4'>
				<div className='row'>
					<div className='col-lg-3'></div>
					<div className='col-lg-6'>
						<center>
							<h3>Summernotes and Tags input</h3>
						</center>
						<Editor editorState={data} onEditorStateChange={updateData} />;
						<div className='mt-4'>
							<div dangerouslySetInnerHTML={{ __html: htmlData }}></div>
						</div>
						<div className='mt-4'>
							<TagsInput onlyUnique={true} value={tagsList} onChange={setTags} inputProps={{ placeholder: 'Keywords' }} />
						</div>
						{tagsdata}
					</div>
					<div className='col-lg-3'></div>
				</div>
			</div>
		</div>
	);
};

export default Post;
