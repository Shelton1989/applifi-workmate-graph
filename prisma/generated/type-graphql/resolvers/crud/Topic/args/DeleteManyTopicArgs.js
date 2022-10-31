"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTopicArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicWhereInput_1 = require("../../../inputs/TopicWhereInput");
let DeleteManyTopicArgs = class DeleteManyTopicArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereInput_1.TopicWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereInput_1.TopicWhereInput)
], DeleteManyTopicArgs.prototype, "where", void 0);
DeleteManyTopicArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTopicArgs);
exports.DeleteManyTopicArgs = DeleteManyTopicArgs;
