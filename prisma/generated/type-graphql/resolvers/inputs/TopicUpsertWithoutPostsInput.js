"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpsertWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateWithoutPostsInput_1 = require("../inputs/TopicCreateWithoutPostsInput");
const TopicUpdateWithoutPostsInput_1 = require("../inputs/TopicUpdateWithoutPostsInput");
let TopicUpsertWithoutPostsInput = class TopicUpsertWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateWithoutPostsInput_1.TopicUpdateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicUpdateWithoutPostsInput_1.TopicUpdateWithoutPostsInput)
], TopicUpsertWithoutPostsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutPostsInput_1.TopicCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutPostsInput_1.TopicCreateWithoutPostsInput)
], TopicUpsertWithoutPostsInput.prototype, "create", void 0);
TopicUpsertWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpsertWithoutPostsInput", {
        isAbstract: true
    })
], TopicUpsertWithoutPostsInput);
exports.TopicUpsertWithoutPostsInput = TopicUpsertWithoutPostsInput;
