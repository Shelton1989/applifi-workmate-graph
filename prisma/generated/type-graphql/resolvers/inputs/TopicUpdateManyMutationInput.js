"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumTOPIC_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumTOPIC_TYPEFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TopicUpdateartistsInput_1 = require("../inputs/TopicUpdateartistsInput");
const TopicUpdateauthorsInput_1 = require("../inputs/TopicUpdateauthorsInput");
const TopicUpdatecastInput_1 = require("../inputs/TopicUpdatecastInput");
const TopicUpdatecreatorsInput_1 = require("../inputs/TopicUpdatecreatorsInput");
const TopicUpdatedirectorsInput_1 = require("../inputs/TopicUpdatedirectorsInput");
const TopicUpdategenresInput_1 = require("../inputs/TopicUpdategenresInput");
const TopicUpdateproducersInput_1 = require("../inputs/TopicUpdateproducersInput");
const TopicUpdatepublishersInput_1 = require("../inputs/TopicUpdatepublishersInput");
let TopicUpdateManyMutationInput = class TopicUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdategenresInput_1.TopicUpdategenresInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdategenresInput_1.TopicUpdategenresInput)
], TopicUpdateManyMutationInput.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatecreatorsInput_1.TopicUpdatecreatorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatecreatorsInput_1.TopicUpdatecreatorsInput)
], TopicUpdateManyMutationInput.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateauthorsInput_1.TopicUpdateauthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateauthorsInput_1.TopicUpdateauthorsInput)
], TopicUpdateManyMutationInput.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateartistsInput_1.TopicUpdateartistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateartistsInput_1.TopicUpdateartistsInput)
], TopicUpdateManyMutationInput.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateproducersInput_1.TopicUpdateproducersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateproducersInput_1.TopicUpdateproducersInput)
], TopicUpdateManyMutationInput.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatedirectorsInput_1.TopicUpdatedirectorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatedirectorsInput_1.TopicUpdatedirectorsInput)
], TopicUpdateManyMutationInput.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatepublishersInput_1.TopicUpdatepublishersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatepublishersInput_1.TopicUpdatepublishersInput)
], TopicUpdateManyMutationInput.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatecastInput_1.TopicUpdatecastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatecastInput_1.TopicUpdatecastInput)
], TopicUpdateManyMutationInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTOPIC_TYPEFieldUpdateOperationsInput_1.EnumTOPIC_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTOPIC_TYPEFieldUpdateOperationsInput_1.EnumTOPIC_TYPEFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateManyMutationInput.prototype, "updatedAt", void 0);
TopicUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateManyMutationInput", {
        isAbstract: true
    })
], TopicUpdateManyMutationInput);
exports.TopicUpdateManyMutationInput = TopicUpdateManyMutationInput;
