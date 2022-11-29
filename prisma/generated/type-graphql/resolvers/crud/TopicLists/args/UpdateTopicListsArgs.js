"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTopicListsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicListsUpdateInput_1 = require("../../../inputs/TopicListsUpdateInput");
const TopicListsWhereUniqueInput_1 = require("../../../inputs/TopicListsWhereUniqueInput");
let UpdateTopicListsArgs = class UpdateTopicListsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsUpdateInput_1.TopicListsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicListsUpdateInput_1.TopicListsUpdateInput)
], UpdateTopicListsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicListsWhereUniqueInput_1.TopicListsWhereUniqueInput)
], UpdateTopicListsArgs.prototype, "where", void 0);
UpdateTopicListsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateTopicListsArgs);
exports.UpdateTopicListsArgs = UpdateTopicListsArgs;
