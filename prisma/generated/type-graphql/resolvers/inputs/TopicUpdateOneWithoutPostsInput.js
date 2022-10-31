"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateOrConnectWithoutPostsInput_1 = require("../inputs/TopicCreateOrConnectWithoutPostsInput");
const TopicCreateWithoutPostsInput_1 = require("../inputs/TopicCreateWithoutPostsInput");
const TopicUpdateWithoutPostsInput_1 = require("../inputs/TopicUpdateWithoutPostsInput");
const TopicUpsertWithoutPostsInput_1 = require("../inputs/TopicUpsertWithoutPostsInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicUpdateOneWithoutPostsInput = class TopicUpdateOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutPostsInput_1.TopicCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutPostsInput_1.TopicCreateWithoutPostsInput)
], TopicUpdateOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutPostsInput_1.TopicCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateOrConnectWithoutPostsInput_1.TopicCreateOrConnectWithoutPostsInput)
], TopicUpdateOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpsertWithoutPostsInput_1.TopicUpsertWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpsertWithoutPostsInput_1.TopicUpsertWithoutPostsInput)
], TopicUpdateOneWithoutPostsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TopicUpdateOneWithoutPostsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TopicUpdateOneWithoutPostsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicUpdateOneWithoutPostsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateWithoutPostsInput_1.TopicUpdateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateWithoutPostsInput_1.TopicUpdateWithoutPostsInput)
], TopicUpdateOneWithoutPostsInput.prototype, "update", void 0);
TopicUpdateOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateOneWithoutPostsInput", {
        isAbstract: true
    })
], TopicUpdateOneWithoutPostsInput);
exports.TopicUpdateOneWithoutPostsInput = TopicUpdateOneWithoutPostsInput;
