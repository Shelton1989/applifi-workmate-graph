"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumLIST_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumLIST_TYPEFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TopicListsUpdatelistsInput_1 = require("../inputs/TopicListsUpdatelistsInput");
let TopicListsUpdateInput = class TopicListsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumLIST_TYPEFieldUpdateOperationsInput_1.EnumLIST_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumLIST_TYPEFieldUpdateOperationsInput_1.EnumLIST_TYPEFieldUpdateOperationsInput)
], TopicListsUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicListsUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsUpdatelistsInput_1.TopicListsUpdatelistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicListsUpdatelistsInput_1.TopicListsUpdatelistsInput)
], TopicListsUpdateInput.prototype, "lists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicListsUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicListsUpdateInput.prototype, "updatedAt", void 0);
TopicListsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicListsUpdateInput", {
        isAbstract: true
    })
], TopicListsUpdateInput);
exports.TopicListsUpdateInput = TopicListsUpdateInput;
