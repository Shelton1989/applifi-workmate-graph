"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateInput_1 = require("../../../inputs/TopicCreateInput");
const TopicUpdateInput_1 = require("../../../inputs/TopicUpdateInput");
const TopicWhereUniqueInput_1 = require("../../../inputs/TopicWhereUniqueInput");
let UpsertTopicArgs = class UpsertTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], UpsertTopicArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateInput_1.TopicCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateInput_1.TopicCreateInput)
], UpsertTopicArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateInput_1.TopicUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicUpdateInput_1.TopicUpdateInput)
], UpsertTopicArgs.prototype, "update", void 0);
UpsertTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertTopicArgs);
exports.UpsertTopicArgs = UpsertTopicArgs;
