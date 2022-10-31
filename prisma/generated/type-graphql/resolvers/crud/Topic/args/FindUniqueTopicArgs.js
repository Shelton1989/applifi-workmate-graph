"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicWhereUniqueInput_1 = require("../../../inputs/TopicWhereUniqueInput");
let FindUniqueTopicArgs = class FindUniqueTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], FindUniqueTopicArgs.prototype, "where", void 0);
FindUniqueTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTopicArgs);
exports.FindUniqueTopicArgs = FindUniqueTopicArgs;
