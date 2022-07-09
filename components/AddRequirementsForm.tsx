import { Button, Form, Switch } from "antd";
import Input from "antd/lib/input/Input";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useAppSelector } from "../Redux hooks/hooks";
import { useAddFunctionalityMutation } from "../types";

const AddRequirementsForm = () => {
  const [blogRequired, setBlogRequired] = useState(false);
  const [mapRequired, setMapRequired] = useState(false);
  const [photoGalleryRequired, setPhotoGalleryRequired] = useState(false);
  const [calenderRequired, setCalenderRequired] = useState(false);
  const [chatPopupRequired, setChatPopupRequired] = useState(false);
  const [contactFormRequired, setContactFormRequired] = useState(false);
  const [emailMarketingRequired, setEmailMarketingRequired] = useState(false);
  const [productCatalogRequired, setProductCatalogRequired] = useState(false);
  const [productSearchRequired, setProductSearchRequired] = useState(false);
  const [videoGalleryRequired, setVideoGalleryRequired] = useState(false);
  const [apiRequired, setApiRequired] = useState(false);
  const [blogCommentsRequired, setBlogCommentsRequired] = useState(false);
  const [blogPostsRequired, setBlogPostsRequired] = useState(false);
  const [otherRequired, setOtherRequired] = useState("");

  const { value: customerId } = useAppSelector((state) => state.customerId);

  const [addFunctionality] = useAddFunctionalityMutation();

  const submit = () => {
    addFunctionality({
      variables: {
        input: {
          customerIdRequire: customerId,
          id: uuid(),
          blogRequire: blogRequired,
          calenderRequire: calenderRequired,
          chatPopupRequire: chatPopupRequired,
          contactFormRequire: contactFormRequired,
          emailMarketingRequire: emailMarketingRequired,
          mapRequire: mapRequired,
          photoGalleryRequire: photoGalleryRequired,
          productCatalogRequire: productCatalogRequired,
          productSearchRequire: productSearchRequired,
          videoGalleryRequire: videoGalleryRequired,
          apiRequire: apiRequired,
          blogCommentsRequire: blogCommentsRequired,
          blogPostsRequire: blogPostsRequired,
          otherRequire: otherRequired,
        },
      },
    });

    setBlogRequired(false);
    setMapRequired(false);
    setPhotoGalleryRequired(false);
    setCalenderRequired(false);
    setChatPopupRequired(false);
    setContactFormRequired(false);
    setEmailMarketingRequired(false);
    setProductCatalogRequired(false);
    setProductSearchRequired(false);
    setVideoGalleryRequired(false);
    setApiRequired(false);
    setBlogCommentsRequired(false);
    setBlogPostsRequired(false);
    setOtherRequired("");
  };

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={submit}
    >
      <Form.Item label="Map" valuePropName="checked">
        <Switch onClick={() => setMapRequired(!mapRequired)} />
      </Form.Item>
      <Form.Item label="Blog" valuePropName="checked">
        <Switch onClick={() => setBlogRequired(!blogRequired)} />
      </Form.Item>
      <Form.Item label="Photo gallery" valuePropName="checked">
        <Switch
          onClick={() => setPhotoGalleryRequired(!photoGalleryRequired)}
        />
      </Form.Item>
      <Form.Item label="Calender">
        <Switch onClick={() => setCalenderRequired(!calenderRequired)} />
      </Form.Item>
      <Form.Item label="Chat Pop-Up">
        <Switch onClick={() => setChatPopupRequired(!chatPopupRequired)} />
      </Form.Item>
      <Form.Item label="Contact Form">
        <Switch onClick={() => setContactFormRequired(!contactFormRequired)} />
      </Form.Item>
      <Form.Item label="Email Marketing">
        <Switch
          onClick={() => setEmailMarketingRequired(!emailMarketingRequired)}
        />
      </Form.Item>
      <Form.Item label="Product Catalog">
        <Switch
          onClick={() => setProductCatalogRequired(!productCatalogRequired)}
        />
      </Form.Item>
      <Form.Item label="Product Search">
        <Switch
          onClick={() => setProductSearchRequired(!productSearchRequired)}
        />
      </Form.Item>
      <Form.Item label="Video Gallery">
        <Switch
          onClick={() => setVideoGalleryRequired(!videoGalleryRequired)}
        />
      </Form.Item>
      <Form.Item label="Api">
        <Switch onClick={() => setApiRequired(!apiRequired)} />
      </Form.Item>
      <Form.Item label="Blog Comment Section">
        <Switch
          onClick={() => setBlogCommentsRequired(!blogCommentsRequired)}
        />
      </Form.Item>
      <Form.Item label="Blog Posts">
        <Switch onClick={() => setBlogPostsRequired(!blogPostsRequired)} />
      </Form.Item>
      <Form.Item label="Other">
        <Input onChange={(e) => setOtherRequired(e.target.value)} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 12,
          span: 16,
        }}
      >
        <Button
          htmlType="submit"
          type="primary"
          style={{
            backgroundColor: "purple",
            border: "none",
          }}
        >
          Add Requirements
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddRequirementsForm;
