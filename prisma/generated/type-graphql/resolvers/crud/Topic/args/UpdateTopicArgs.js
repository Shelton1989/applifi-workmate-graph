"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicUpdateInput_1 = require("../../../inputs/TopicUpdateInput");
const TopicWhereUniqueInput_1 = require("../../../inputs/TopicWhereUniqueInput");
let UpdateTopicArgs = class UpdateTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateInput_1.TopicUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicUpdateInput_1.TopicUpdateInput)
], UpdateTopicArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], UpdateTopicArgs.prototype, "where", void 0);
UpdateTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTopicArgs);
exports.UpdateTopicArgs = UpdateTopicArgs;
